import { resetDatabase } from './seed';

// Safety check - prevent accidental production reset
if (process.env.NODE_ENV === 'production') {
  console.error('❌ Cannot reset database in production environment!');
  process.exit(1);
}

resetDatabase()
  .then(() => {
    console.log('✅ Database reset completed');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Database reset failed:', error);
    process.exit(1);
  });
