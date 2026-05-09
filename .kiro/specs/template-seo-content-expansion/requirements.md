# Requirements Document

## Introduction

This feature aims to aggressively increase organic traffic to the Consumer Complaint Portal by optimizing template pages for high-volume, long-tail search queries. Currently, 32 existing templates use auto-generated, generic meta titles and descriptions. This feature will add custom SEO metadata support to the database schema, retrofit all existing templates with keyword-optimized metadata, and add 8 new high-value templates targeting specific consumer complaint scenarios with strong search demand.

## Glossary

- **Template**: A pre-formatted complaint letter document stored in the database with title, content, language, and metadata
- **SEO_Metadata**: Custom title and description fields stored in the Template database schema for search engine optimization
- **Template_Schema**: The Mongoose schema definition for Template documents in MongoDB
- **Seed_Script**: The seedTemplates.ts file that populates the database with initial template data
- **Frontend_Metadata_Generator**: The generateMetadata function in the template page component that produces HTML meta tags
- **Database_Reseeding**: The process of dropping existing templates and inserting newly optimized ones using npm run seed

## Requirements

### Requirement 1: Add SEO Metadata Support to Database Schema

**User Story:** As a developer, I want the Template schema to support custom SEO metadata, so that each template can have optimized title and description for search engines.

#### Acceptance Criteria

1. THE Template_Schema SHALL include an optional metadata object with title and description string fields
2. THE metadata object structure SHALL match the structure used in the Guide model for consistency
3. WHEN a Template document is created without metadata, THE Template_Schema SHALL allow the document to be saved successfully
4. WHEN a Template document is created with metadata, THE Template_Schema SHALL validate that metadata.title and metadata.description are strings

### Requirement 2: Update Frontend SEO Rendering Logic

**User Story:** As a user, I want template pages to display custom SEO metadata in search results, so that I can find relevant templates through search engines.

#### Acceptance Criteria

1. WHEN a Template has custom metadata.title, THE Frontend_Metadata_Generator SHALL use metadata.title as the page title
2. WHEN a Template has custom metadata.description, THE Frontend_Metadata_Generator SHALL use metadata.description as the page description
3. WHEN a Template lacks custom metadata.title, THE Frontend_Metadata_Generator SHALL fall back to the current auto-generated title format
4. WHEN a Template lacks custom metadata.description, THE Frontend_Metadata_Generator SHALL fall back to the current auto-generated description format
5. THE Frontend_Metadata_Generator SHALL render the title in the HTML title tag
6. THE Frontend_Metadata_Generator SHALL render the description in the HTML meta description tag

### Requirement 3: Retrofit Existing Templates with SEO Metadata

**User Story:** As a content manager, I want all 32 existing templates to have keyword-optimized metadata, so that they rank for relevant search queries.

#### Acceptance Criteria

1. THE Seed_Script SHALL inject a metadata object into all 32 existing template definitions
2. FOR ALL existing templates, THE metadata.title SHALL contain exact match keywords relevant to the template topic
3. FOR ALL existing templates, THE metadata.description SHALL contain secondary keywords and value propositions
4. THE metadata.title SHALL include the template name and relevant qualifiers such as format type, language, or use case
5. THE metadata.description SHALL mention features such as "Free copy-paste format", "PDF download", or "Consumer forum draft"
6. THE metadata.title SHALL be concise and under 70 characters where possible
7. THE metadata.description SHALL be under 160 characters where possible

### Requirement 4: Add New High-Value Templates

**User Story:** As a user, I want access to complaint templates for common high-demand scenarios, so that I can quickly draft complaints for my specific situation.

#### Acceptance Criteria

1. THE Seed_Script SHALL add a Cyber Fraud Police Complaint template in Hindi and English
2. THE Seed_Script SHALL add an IRCTC Train Ticket Refund template in Hinglish
3. THE Seed_Script SHALL add an EPF Withdrawal Delay Complaint template in Hindi
4. THE Seed_Script SHALL add a Loan Recovery Agent Harassment template in English
5. THE Seed_Script SHALL add an Airlines Baggage Loss or Damage template in English
6. THE Seed_Script SHALL add an Ola/Uber Overcharging Complaint template in Hinglish
7. THE Seed_Script SHALL add a Post Office Parcel Missing template in Hindi
8. THE Seed_Script SHALL add a Medical Negligence Notice to Hospital template in English
9. FOR ALL new templates, THE Seed_Script SHALL include keyword-optimized metadata.title and metadata.description
10. FOR ALL new templates, THE template content SHALL include placeholder fields for user customization
11. FOR ALL new templates, THE template content SHALL follow the established format pattern of existing templates

### Requirement 5: Execute Database Reseeding

**User Story:** As a developer, I want to reseed the database with optimized templates, so that the changes take effect in the production environment.

#### Acceptance Criteria

1. WHEN the npm run seed command is executed, THE Seed_Script SHALL drop all existing Template documents from the database
2. WHEN the npm run seed command is executed, THE Seed_Script SHALL insert all 40 templates (32 retrofitted + 8 new) with their metadata
3. WHEN templates are reseeded, THE downloadCount field SHALL be set to random seed values
4. WHEN the seeding process completes successfully, THE Seed_Script SHALL log a success message
5. IF the seeding process fails, THE Seed_Script SHALL log an error message with details

### Requirement 6: Verify SEO Metadata Rendering

**User Story:** As a developer, I want to verify that SEO metadata renders correctly in production, so that search engines can index the optimized content.

#### Acceptance Criteria

1. WHEN a template page is loaded in a browser, THE page source SHALL contain a title tag with the custom metadata.title
2. WHEN a template page is loaded in a browser, THE page source SHALL contain a meta description tag with the custom metadata.description
3. WHEN a template page is loaded in a browser, THE page source SHALL contain Open Graph meta tags with the custom metadata
4. WHEN the templates listing page is loaded, THE page SHALL display all 40 templates including the 8 new ones
5. WHEN a MongoDB query is executed for Template documents, THE documents SHALL contain the metadata field with title and description

