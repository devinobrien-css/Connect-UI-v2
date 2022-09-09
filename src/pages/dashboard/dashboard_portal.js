import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { dashboardPostState } from '../../atoms';

const PortalNav = () => {
  const textStyles =
    'py-1 text-gray-400 text-mono cursor-pointer hover:text-gray-500 hover:underline';

  return (
    <div className="flex-none w-1/4">
      <div className="h-min max-h-min dark:bg-gray-600 px-6 rounded-lg dark:border-transparent shadow-lg">
        <div className="py-2">
          <p className={textStyles}>Home</p>
          <p className={textStyles}>Mentions</p>
          <p className={textStyles}>All Posts</p>
          <p className={textStyles}>Your Posts</p>
        </div>
        <hr className="border-gray-700" />
        <div className="py-2">
          <p className={textStyles}>u/thread 1</p>
          <p className={textStyles}>u/thread 2</p>
          <p className={textStyles}>u/thread 3</p>
          <p className={textStyles}>u/thread 4</p>
          <p className={textStyles}>u/thread 5</p>
          <p className={textStyles}>u/thread 6</p>
        </div>
      </div>
    </div>
  );
};

function GetPosts(type) {
  const recent_posts = [
    {
      title: 'Recent Post',
      contributor: {
        name: 'Random User',
        img: 'https://via.placeholder.com/60',
      },
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt rem dicta consequatur cupiditate pariatur quos voluptatem, saepe eum iure commodi dolorum eius porro laudantium ipsa! Odio, nisi provident sequi pariatur tempore voluptas deleniti nobis neque. ',
      date: 'Aug 29 at 8:33 AM',
    },
    {
      title: 'One more Recent',
      contributor: {
        name: 'This User',
        img: 'https://via.placeholder.com/60',
      },
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt rem dicta consequatur cupiditate pariatur quos voluptatem, saepe eum iure commodi dolorum eius porro laudantium ipsa! Odio, nisi provident sequi pariatur tempore voluptas deleniti nobis neque. ',
      date: 'Sep. 3 at 10:45 AM',
    },
  ];

  const popular_posts = [
    {
      title: 'Title of Post',
      contributor: {
        name: 'Random User',
        img: 'https://via.placeholder.com/60',
      },
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt rem dicta consequatur cupiditate pariatur quos voluptatem, saepe eum iure commodi dolorum eius porro laudantium ipsa! Odio, nisi provident sequi pariatur tempore voluptas deleniti nobis neque. ',
      date: 'Aug 31 at 10:33 AM',
    },
    {
      title: 'One more Post',
      contributor: {
        name: 'Random User',
        img: 'https://via.placeholder.com/60',
      },
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt rem dicta consequatur cupiditate pariatur quos voluptatem, saepe eum iure commodi dolorum eius porro laudantium ipsa! Odio, nisi provident sequi pariatur tempore voluptas deleniti nobis neque. ',
      date: 'Sep. 2 at 8:33 AM',
    },
    {
      title: 'Just another post',
      contributor: {
        name: 'This Guy',
        img: 'https://via.placeholder.com/60',
      },
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt rem dicta consequatur cupiditate pariatur quos voluptatem, saepe eum iure commodi dolorum eius porro laudantium ipsa! Odio, nisi provident sequi pariatur tempore voluptas deleniti nobis neque. ',
      date: 'Jul. 29 at 4:21 PM',
    },
  ];

  const favorite_posts = [
    {
      title: 'Favorite Post',
      contributor: {
        name: 'Random User',
        img: 'https://via.placeholder.com/60',
      },
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt rem dicta consequatur cupiditate pariatur quos voluptatem, saepe eum iure commodi dolorum eius porro laudantium ipsa! Odio, nisi provident sequi pariatur tempore voluptas deleniti nobis neque. ',
      date: 'Aug 31 at 10:33 AM',
    },
  ];

  if (type === 'popular') {
    return popular_posts;
  } else if (type === 'recents') {
    return recent_posts;
  } else {
    return favorite_posts;
  }
}

const PortalPostDirectory = () => {
  const [postType, setPostType] = useRecoilState(dashboardPostState);

  function isCurrentType(button) {
    return postType === button ? ' underline' : '';
  }

  return (
    <div className="flex-1 mx-4 h-full overflow-scroll">
      <div className="shadow-lg bg-gray-200 rounded-lg p-2 dark:bg-gray-500 flex">
        <p
          onClick={() => {
            setPostType('recents');
          }}
          className={
            'cursor-pointer w-1/3 text-center mx-auto text-gray-300 border-solid border-r-2 border-gray-800 hover:text-gray-300' +
            isCurrentType('recents')
          }
        >
          Recent
        </p>
        <p
          onClick={() => {
            setPostType('popular');
          }}
          className={
            'cursor-pointer w-1/3 text-center mx-auto text-gray-300 border-solid border-r-2 border-gray-800 hover:text-gray-300' +
            isCurrentType('popular')
          }
        >
          Popular
        </p>
        <p
          onClick={() => {
            setPostType('favorites');
          }}
          className={
            'cursor-pointer w-1/3 text-center mx-auto text-gray-300 hover:text-gray-300' +
            isCurrentType('favorites')
          }
        >
          Favorites
        </p>
      </div>

      {GetPosts(postType).map((post, index) => {
        return (
          <div
            key={index}
            className="shadow-lg bg-gray-200 rounded-lg p-2 my-4 dark:bg-gray-500"
          >
            <div className="flex">
              <div className="shrink-0">
                <img src={post.contributor.img} className="rounded-full" />
              </div>
              <div className="px-3">
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {post.contributor.name}
                </p>
                <p className="text-gray-500 text-sm dark:text-gray-400">
                  {post.date}
                </p>
              </div>
            </div>
            <div className="p-2">
              <p className="font-bold dark:text-gray-300">{post.title}</p>
              <p className="py-2 dark:text-gray-300">{post.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const PortalAds = () => {
  const people = [
    {
      name: 'John Doe',
      img: '',
    },
  ];

  return (
    <div className="flex-1 w-1/2 mx-4">
      {people.map((post, index) => {
        console.log(post);
        return (
          <div key={index} className="">
            <p>{post.name}</p>
          </div>
        );
      })}
    </div>
  );
};

const DashboardPortal = () => {
  return (
    <div className="my-4 flex">
      <PortalNav />
      <PortalPostDirectory />
      <PortalAds />
    </div>
  );
};

export default DashboardPortal;
