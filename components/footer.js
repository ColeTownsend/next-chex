import styles from './footer.module.css';
import { Page } from '@zeit-ui/react';

export default () => (
  <Page.Footer className={styles.footer}>
    <hr />
    <ul className={styles.navItems}>
      <li className={styles.navItem}>
        <a href="https://next-auth.js.org">Documentation</a>
      </li>
      <li className={styles.navItem}>
        <a href="https://www.npmjs.com/package/next-auth">NPM</a>
      </li>
      <li className={styles.navItem}>
        <a href="https://github.com/iaincollins/next-auth-example">GitHub</a>
      </li>
      <li className={styles.navItem}>
        <em>next-auth@3.0.0-beta.9</em>
      </li>
    </ul>
  </Page.Footer>
);
