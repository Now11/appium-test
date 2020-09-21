import { BaseFragment, ArrayElement, Log } from '../../../../lib';

@Log
class ListFragment extends BaseFragment {
  menuItems: ArrayElement;
  constructor({ root, name }) {
    super({ root, name });
    this.menuItems = this.initChild(ArrayElement, "//*[@resource-id='android:id/text1']", 'Menu items', { isArr: true });
  }

  async itemsList() {
    return await this.menuItems.getList();
  }
}
export { ListFragment };
