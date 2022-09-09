import React from 'react';
import { useRecoilState } from 'recoil';
import { pageState } from '../../atoms.js';
import Dashboard from '../../pages/dashboard/dashboard.js';
import Header from '../header/header';

/** Renders the requested page
 *
 * @param {str} args.page specifies the page to route to
 * @returns the requested page
 */
const GeneratePage = (args) => {
  if (args.page === 'dashboard') {
    return <Dashboard />;
  } else if (args.page === 'explore') {
    return <p>explore</p>;
  } else {
    return <p>no page specified</p>;
  }
};

/** Container for the selected page's content
 *
 * @returns a container holding the selected page
 */
const ContentRouter = () => {
  const [page, setPage] = useRecoilState(pageState);

  return (
    <div className="w-full px-2 transition-all flex flex-col items-top justify-top h-screen">
        <Header />
        <GeneratePage page={page} />
    </div>
  );
};

export default ContentRouter;
