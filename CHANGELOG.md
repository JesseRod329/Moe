# Changelog

## [Latest] - 2025-01-XX

### Fixed
- **Time Format Error**: Fixed "The string did not match the expected pattern" error by ensuring time slots are sent in `HH:MM:SS` format (PostgreSQL requirement)
- Time slots now properly format as `09:00:00`, `10:00:00`, etc. instead of `09:00`

### Added
- **Calendar & Time Slot Picker**: 
  - Date picker with calendar popup
  - Time slot selection (9 AM - 5 PM, hourly intervals)
  - Real-time availability checking
  - Visual feedback for booked/selected/available slots
- **Database Schema Updates**:
  - Added `booking_date` (date) and `booking_time` (time) columns to bookings table
- **API Endpoints**:
  - `/api/bookings/available-slots` - Fetch booked time slots for a given date
- **Git Repository**: 
  - Initialized git repository
  - Pushed to GitHub: https://github.com/JesseRod329/Moe
- **Documentation**:
  - README.md with setup instructions
  - SUPABASE_MCP_SETUP.md guide
  - .gitignore file

### Changed
- Updated BookingForm to require date and time selection
- Improved error handling and validation
- Enhanced UI with better visual states for time slots

### Technical Details
- Time format: Changed from `HH:MM` to `HH:MM:SS` to match PostgreSQL `time` type requirements
- Database: Added proper date/time columns for precise booking scheduling
- API: Added validation to prevent double-booking of time slots

