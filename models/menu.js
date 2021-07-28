export default class Menu {
  renderMenu(navPills) {
    const content = navPills.map((np) => {
      return `
            <li class="nav-item">
                <a class="nav-link" id="pills-${np.tabName}" data-toggle="pill" href="#pills-${np.type}" role="tab"  aria-controls="pills-${np.type}" aria-selected="false">${np.showName}</a>
            </li>
            `;
    });
    return content.join('\n');
  }
  renderTabPane(navPills){
    const content = navPills.map((np) => {
        return `
            <div class="nav__gridContent w-100 tab-pane fade " id="pills-${np.type}" role="tabpanel"></div>
              `;
      });
      return content.join('\n');
}   
}
