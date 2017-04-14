import * as React from 'react';
import * as classNames from 'classnames';
import { remote } from 'electron';

import { Filter } from './filter-select';

export interface AppCoreHeaderProps {
  menuToggle: Function;
  onFilterToggle: Function;
  onSearchChange: Function;
}

export class AppCoreHeader extends React.Component<AppCoreHeaderProps, undefined> {
  constructor(props: AppCoreHeaderProps) {
    super(props);

    this.refresh = this.refresh.bind(this);
  }

  public refresh() {
    remote.getCurrentWindow().reload();
  }

  public render() {
    const { onFilterToggle, onSearchChange } = this.props;
    const appCoreHeaderClassName = classNames('headroom', 'headroom--pinned', 'headroom--top');

    return (
      <header className={appCoreHeaderClassName}>
        <a id='menu_toggle' onClick={() => this.props.menuToggle()}>
          <span className='menu_icon'></span>
          <span className='menu_label'>Menu</span>
          <span className='vert_divider'></span>
        </a>
        <h1 id='header_team_name' className='inline_block'>
          <a onClick={this.refresh}>
            <i className='ts_icon ts_icon_home'></i>
          </a>
        </h1>
        <div className='header_btns float_right'>
          <Filter onSearchChange={onSearchChange} onFilterToggle={onFilterToggle} />
        </div>
      </header>
    );
  }
}
