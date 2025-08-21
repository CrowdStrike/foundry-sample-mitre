# Foundry E2E Tests

End-to-end tests for the foundry-sample-mitre application using Playwright.

## Prerequisites

1. **Environment Setup**: Create a `.env` file with your Falcon credentials:
   ```bash
   FALCON_USERNAME=your.email@company.com
   FALCON_PASSWORD=your-password
   FALCON_AUTH_SECRET=your-totp-secret
   FALCON_BASE_URL=https://falcon.us-2.crowdstrike.com
   APP_NAME=foundry-sample-mitre
   ```

2. **App Deployment**: Ensure the app is deployed to your Falcon environment:
   ```bash
   foundry apps deploy
   foundry apps release
   ```

## Running Tests

### Basic Test Execution
```bash
# Run all tests
npm test

# Run with list reporter (cleaner output)
npm test -- --reporter=list
```

### Debug Modes

#### 1. Verbose Logging Mode
Shows detailed debug information including element states, wait conditions, and context:
```bash
npm run test:verbose
```

#### 2. Playwright Debug Mode  
Opens browser in debug mode with step-by-step controls:
```bash
npm run test:debug
```

#### 3. Manual Debug Environment
Set debug flag manually:
```bash
DEBUG=true npm test
```

#### 4. UI Mode
Interactive test runner with visual debugging:
```bash
npm run test:ui
```

### Debug Mode Features

When debug mode is enabled (`DEBUG=true`), you'll see:
- **Element Wait Details**: Timeout values, element states, retry attempts
- **Screenshot Context**: Detailed information about captured screenshots  
- **Navigation Context**: Page timing and URL patterns
- **Interaction Context**: Click attempts, element visibility checks
- **Error Context**: Enhanced error messages with debugging information

### Common Debug Scenarios

#### App Not Found
If tests fail with "App not found":
1. Verify app deployment: `foundry apps list-deployments`
2. Check APP_NAME matches deployed app name
3. Run with debug mode to see navigation attempts

#### Element Interaction Failures
If clicks timeout or fail:
1. Use `npm run test:debug` to step through interactions
2. Check for element interception issues in debug logs
3. Verify iframe loading and content accessibility

#### Authentication Issues
If login fails:
1. Verify `.env` credentials are correct
2. Check TOTP secret is current and valid
3. Run single test with debug mode to isolate issue

## Test Structure

- **authenticate.setup.ts**: Handles Falcon login with MFA
- **foundry.spec.ts**: Main test suite with app installation and interaction tests
- **Page Objects**: Structured page interactions in `src/pages/`
- **Configuration**: Environment-specific settings in `src/config/TestConfig.ts`

## Available Test Commands

| Command | Description |
|---------|-------------|
| `npm test` | Run all tests with default settings |
| `npm run test:verbose` | Run with debug logging enabled |
| `npm run test:debug` | Run in Playwright debug mode |
| `npm run test:ui` | Run with interactive UI mode |

## Troubleshooting

- **Tests hang**: Check for modal dialogs or authentication prompts
- **Navigation failures**: Verify app is installed and accessible in Custom Apps menu  
- **Element not found**: Use debug mode to inspect page structure and timing
- **Timeout errors**: Check network conditions and increase timeouts if needed

For more debugging tips, see the test logs and enable verbose mode for detailed information.