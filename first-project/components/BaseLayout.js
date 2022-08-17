import './Navigation';
import Navigation from './Navigation';

export default function BaseLayout({ children }) {
  return (
    <div>
      <Navigation />

      <div className="container">
        <div>{children}</div>
      </div>
    </div>
  );
}
