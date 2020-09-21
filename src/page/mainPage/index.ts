import { Application, Log } from '../../../lib';
import { ListFragment } from './fragments';

@Log
class MainPage extends Application {
  mainMenu: ListFragment;
  constructor() {
    super("//*[@resource-id='android:id/decor_content_parent']", 'Main Page');
    this.mainMenu = this.initChild(ListFragment, "//*[@resource-id='android:id/list']", 'Main menu');
  }

  async getButtonsTitles() {
    const list = await this.mainMenu.itemsList();

    const btnNames = list.map((option) => {
      return option.getText();
    });

    return await Promise.all(btnNames);
  }
}
export { MainPage };
