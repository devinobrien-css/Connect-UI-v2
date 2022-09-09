import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { darkMode, userState } from '../../atoms';

/** Contains the user icon, dark mode toggle and search bar toggle
 *
 * @returns the header of the website
 */
const Header = () => {
  const [theme, setTheme] = useRecoilState(darkMode);
  const [user, setUser] = useRecoilState(userState);

  // sets document theme to dark if not yet set
  useEffect(() => {
    document.documentElement.classList.add('dark');
    setTheme('dark');
  }, []);

  return (
    <div className="flex justify-end">
      <div className="my-auto h-fit">
        <button
          className="block"
          onClick={() => {
            console.log(theme);
            if (theme === 'dark') {
              document.documentElement.classList.remove('dark');
              setTheme('light');
            } else {
              document.documentElement.classList.add('dark');
              setTheme('dark');
            }
          }}
        >
          {theme === 'dark' ? '🌝' : '🌚'}
        </button>
      </div>
      <div className="p-2">
        <button
          data-tooltip-target="card"
          data-tooltip-placement="bottom"
          data-tooltip-trigger="click"
          type="button"
          className="rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          <img className="rounded-full" src="https://via.placeholder.com/35" />
        </button>
        <div
          id="card"
          role="tooltip"
          className="shadow-xl inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-200 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-600"
        >
          <div className="text-gray-800 dark:text-gray-200 text-center px-3">
            <img
              src="https://via.placeholder.com/50"
              className="rounded-full mx-auto"
            />
            <p className="py-2">
              {user.first} {user.last}
            </p>
            <hr className="border-2 border-solid border-gray-100 rounded" />
            <p className="py-2 hover:text-gray-400 cursor-pointer">
              view profile
            </p>
            <hr className="border-2 border-solid border-gray-100 rounded" />
            <p className="py-2 hover:text-gray-400 cursor-pointer">sign out</p>
          </div>

          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
    </div>
  );
};
export default Header;
