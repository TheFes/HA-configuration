# Home Assistant Packages

This directory contains modular Home Assistant configuration packages organized by location and functionality.

## Directory Structure

### Core System Packages
- **[00 general/](./00%20general/)** - System-wide functionality, utilities, and cross-room features (59 files)
- **[integrations.yaml](./integrations.yaml)** - Main integrations configuration

### Floor-Based Packages
- **[00_ground_floor/](./00_ground_floor/)** - Ground floor room automations and controls (12 files)
- **[00_outside/](./00_outside/)** - Outdoor area automations (3 files)
- **[01_first_floor/](./01_first_floor/)** - First floor room automations (4 files)
- **[02_second_floor/](./02_second_floor/)** - Second floor room automations (9 files)

### Third-Party Integrations
- **[google_cast/](./google_cast/)** - Google Cast integration with comprehensive documentation

## Package Organization

The packages are organized with a logical naming convention:
- `00` prefix for core/general functionality
- `01`, `02` prefixes for floor numbers

Each package contains YAML files that define automations, sensors, scripts, and other Home Assistant entities specific to their functional area or physical location.