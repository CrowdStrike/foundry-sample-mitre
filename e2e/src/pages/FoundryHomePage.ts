import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class FoundryHomePage extends BasePage {
  constructor(page: Page) {
    super(page, 'FoundryHomePage');
  }

  protected getPagePath(): string {
    return '/foundry/home';
  }

  protected async verifyPageLoaded(): Promise<void> {
    await expect(this.page).toHaveTitle('Home | Foundry | Falcon');
  }

  async verifyLoaded(): Promise<void> {
    await this.verifyPageLoaded();
    this.logger.success('Foundry home page loaded successfully');
  }

  async navigateToAppManager(): Promise<void> {
    this.logger.step('Navigate to App manager');
    
    await this.smartClick(
      this.page.getByRole('link', { name: 'App manager' }),
      'App manager link'
    );
    
    await expect(this.page).toHaveTitle('App manager | Foundry | Falcon');
    this.logger.success('Navigated to App manager');
  }
}