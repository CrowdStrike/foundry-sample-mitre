import { Page, FrameLocator } from '@playwright/test';
import { SocketNavigationPage } from '@crowdstrike/foundry-playwright';

export class MitreRemediationPage extends SocketNavigationPage {
  constructor(page: Page) {
    super(page);
  }

  async openTriageExtension(): Promise<FrameLocator> {
    return this.withTiming(async () => {
      await this.navigateToEndpointDetections();
      await this.openFirstDetection();
      return await this.expandExtensionInSocket('Triage App');
    }, 'Open Triage App extension');
  }
}
