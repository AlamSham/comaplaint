// Structured logging utility for production
type LogLevel = 'info' | 'warn' | 'error' | 'debug';

interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  route?: string;
  method?: string;
  statusCode?: number;
  error?: {
    name: string;
    message: string;
    stack?: string;
  };
  metadata?: Record<string, any>;
}

// PII patterns to redact
const PII_PATTERNS = [
  /\b\d{10}\b/g, // Phone numbers
  /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g, // Emails
  /\b\d{12}\b/g, // Aadhaar numbers
  /\b[A-Z]{5}\d{4}[A-Z]\b/g, // PAN numbers
];

function redactPII(text: string): string {
  let redacted = text;
  PII_PATTERNS.forEach(pattern => {
    redacted = redacted.replace(pattern, '[REDACTED]');
  });
  return redacted;
}

function formatLogEntry(entry: LogEntry): string {
  if (process.env.NODE_ENV === 'production') {
    // JSON format for production (easier to parse by log aggregators)
    return JSON.stringify({
      ...entry,
      message: redactPII(entry.message),
      error: entry.error ? {
        ...entry.error,
        message: redactPII(entry.error.message),
      } : undefined,
    });
  } else {
    // Human-readable format for development
    const { timestamp, level, message, route, method, statusCode, error } = entry;
    let log = `[${timestamp}] ${level.toUpperCase()}: ${message}`;
    if (route) log += ` | Route: ${route}`;
    if (method) log += ` | Method: ${method}`;
    if (statusCode) log += ` | Status: ${statusCode}`;
    if (error) log += `\n  Error: ${error.name}: ${error.message}`;
    return log;
  }
}

class Logger {
  private log(level: LogLevel, message: string, metadata?: Record<string, any>) {
    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      ...metadata,
    };

    const formatted = formatLogEntry(entry);

    switch (level) {
      case 'error':
        console.error(formatted);
        break;
      case 'warn':
        console.warn(formatted);
        break;
      case 'debug':
        if (process.env.NODE_ENV !== 'production') {
          console.debug(formatted);
        }
        break;
      default:
        console.log(formatted);
    }
  }

  info(message: string, metadata?: Record<string, any>) {
    this.log('info', message, metadata);
  }

  warn(message: string, metadata?: Record<string, any>) {
    this.log('warn', message, metadata);
  }

  error(message: string, error?: Error, metadata?: Record<string, any>) {
    this.log('error', message, {
      ...metadata,
      error: error ? {
        name: error.name,
        message: error.message,
        stack: process.env.NODE_ENV !== 'production' ? error.stack : undefined,
      } : undefined,
    });
  }

  debug(message: string, metadata?: Record<string, any>) {
    this.log('debug', message, metadata);
  }

  // API-specific logging
  apiRequest(method: string, route: string, metadata?: Record<string, any>) {
    this.info(`API Request: ${method} ${route}`, {
      method,
      route,
      ...metadata,
    });
  }

  apiResponse(method: string, route: string, statusCode: number, metadata?: Record<string, any>) {
    const level = statusCode >= 400 ? 'error' : statusCode >= 300 ? 'warn' : 'info';
    this.log(level, `API Response: ${method} ${route}`, {
      method,
      route,
      statusCode,
      ...metadata,
    });
  }

  apiError(method: string, route: string, error: Error, metadata?: Record<string, any>) {
    this.error(`API Error: ${method} ${route}`, error, {
      method,
      route,
      ...metadata,
    });
  }
}

// Export singleton instance
export const logger = new Logger();

// Export types for use in other files
export type { LogLevel, LogEntry };
