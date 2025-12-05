import React from 'react';
import { SvgIcon } from '../atoms/svg-sprite-loader';

const SvgIconDemo: React.FC = () => {
  const handleIconClick = (iconName: string) => {
    console.log(`Clicked on ${iconName} icon`);
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">SVG Icon System Demo</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {/* Basic Icons */}
        <div className="flex flex-col items-center space-y-2">
          <SvgIcon 
            name="home" 
            viewBox="0 0 24 24" 
            width="32" 
            height="32" 
            fill="currentColor"
            className="text-blue-600"
            onClick={() => handleIconClick('home')}
          />
          <span className="text-sm text-gray-600">Home</span>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <SvgIcon 
            name="user" 
            viewBox="0 0 24 24" 
            width="32" 
            height="32" 
            fill="currentColor"
            className="text-green-600"
            onClick={() => handleIconClick('user')}
          />
          <span className="text-sm text-gray-600">User</span>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <SvgIcon 
            name="settings" 
            viewBox="0 0 24 24" 
            width="32" 
            height="32" 
            fill="currentColor"
            className="text-purple-600"
            onClick={() => handleIconClick('settings')}
          />
          <span className="text-sm text-gray-600">Settings</span>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <SvgIcon 
            name="search" 
            viewBox="0 0 24 24" 
            width="32" 
            height="32" 
            fill="currentColor"
            className="text-orange-600"
            onClick={() => handleIconClick('search')}
          />
          <span className="text-sm text-gray-600">Search</span>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <SvgIcon 
            name="menu" 
            viewBox="0 0 24 24" 
            width="32" 
            height="32" 
            fill="currentColor"
            className="text-red-600"
            onClick={() => handleIconClick('menu')}
          />
          <span className="text-sm text-gray-600">Menu</span>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <SvgIcon 
            name="close" 
            viewBox="0 0 24 24" 
            width="32" 
            height="32" 
            fill="currentColor"
            className="text-gray-600"
            onClick={() => handleIconClick('close')}
          />
          <span className="text-sm text-gray-600">Close</span>
        </div>

        {/* Action Icons */}
        <div className="flex flex-col items-center space-y-2">
          <SvgIcon 
            name="arrow-right" 
            viewBox="0 0 24 24" 
            width="32" 
            height="32" 
            fill="currentColor"
            className="text-indigo-600"
            onClick={() => handleIconClick('arrow-right')}
          />
          <span className="text-sm text-gray-600">Arrow Right</span>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <SvgIcon 
            name="arrow-left" 
            viewBox="0 0 24 24" 
            width="32" 
            height="32" 
            fill="currentColor"
            className="text-indigo-600"
            onClick={() => handleIconClick('arrow-left')}
          />
          <span className="text-sm text-gray-600">Arrow Left</span>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <SvgIcon 
            name="check" 
            viewBox="0 0 24 24" 
            width="32" 
            height="32" 
            fill="currentColor"
            className="text-green-600"
            onClick={() => handleIconClick('check')}
          />
          <span className="text-sm text-gray-600">Check</span>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <SvgIcon 
            name="plus" 
            viewBox="0 0 24 24" 
            width="32" 
            height="32" 
            fill="currentColor"
            className="text-emerald-600"
            onClick={() => handleIconClick('plus')}
          />
          <span className="text-sm text-gray-600">Plus</span>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <SvgIcon 
            name="minus" 
            viewBox="0 0 24 24" 
            width="32" 
            height="32" 
            fill="currentColor"
            className="text-red-600"
            onClick={() => handleIconClick('minus')}
          />
          <span className="text-sm text-gray-600">Minus</span>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <SvgIcon 
            name="star" 
            viewBox="0 0 24 24" 
            width="32" 
            height="32" 
            fill="currentColor"
            className="text-yellow-500"
            onClick={() => handleIconClick('star')}
          />
          <span className="text-sm text-gray-600">Star</span>
        </div>

        {/* Communication Icons */}
        <div className="flex flex-col items-center space-y-2">
          <SvgIcon 
            name="heart" 
            viewBox="0 0 24 24" 
            width="32" 
            height="32" 
            fill="currentColor"
            className="text-pink-600"
            onClick={() => handleIconClick('heart')}
          />
          <span className="text-sm text-gray-600">Heart</span>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <SvgIcon 
            name="mail" 
            viewBox="0 0 24 24" 
            width="32" 
            height="32" 
            fill="currentColor"
            className="text-blue-600"
            onClick={() => handleIconClick('mail')}
          />
          <span className="text-sm text-gray-600">Mail</span>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <SvgIcon 
            name="phone" 
            viewBox="0 0 24 24" 
            width="32" 
            height="32" 
            fill="currentColor"
            className="text-green-600"
            onClick={() => handleIconClick('phone')}
          />
          <span className="text-sm text-gray-600">Phone</span>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <SvgIcon 
            name="location" 
            viewBox="0 0 24 24" 
            width="32" 
            height="32" 
            fill="currentColor"
            className="text-red-600"
            onClick={() => handleIconClick('location')}
          />
          <span className="text-sm text-gray-600">Location</span>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <SvgIcon 
            name="calendar" 
            viewBox="0 0 24 24" 
            width="32" 
            height="32" 
            fill="currentColor"
            className="text-purple-600"
            onClick={() => handleIconClick('calendar')}
          />
          <span className="text-sm text-gray-600">Calendar</span>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <SvgIcon 
            name="clock" 
            viewBox="0 0 24 24" 
            width="32" 
            height="32" 
            fill="currentColor"
            className="text-gray-600"
            onClick={() => handleIconClick('clock')}
          />
          <span className="text-sm text-gray-600">Clock</span>
        </div>
      </div>

      {/* Different Sizes Demo */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Different Sizes</h3>
        <div className="flex items-center space-x-4">
          <SvgIcon 
            name="home" 
            viewBox="0 0 24 24" 
            width="16" 
            height="16" 
            fill="currentColor"
            className="text-blue-600"
          />
          <SvgIcon 
            name="home" 
            viewBox="0 0 24 24" 
            width="24" 
            height="24" 
            fill="currentColor"
            className="text-blue-600"
          />
          <SvgIcon 
            name="home" 
            viewBox="0 0 24 24" 
            width="32" 
            height="32" 
            fill="currentColor"
            className="text-blue-600"
          />
          <SvgIcon 
            name="home" 
            viewBox="0 0 24 24" 
            width="48" 
            height="48" 
            fill="currentColor"
            className="text-blue-600"
          />
          <SvgIcon 
            name="home" 
            viewBox="0 0 24 24" 
            width="64" 
            height="64" 
            fill="currentColor"
            className="text-blue-600"
          />
        </div>
      </div>

      {/* Custom Styling Demo */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Custom Styling</h3>
        <div className="flex items-center space-x-4">
          <SvgIcon 
            name="star" 
            viewBox="0 0 24 24" 
            width="32" 
            height="32" 
            fill="currentColor"
            className="text-yellow-500 hover:text-yellow-600 transition-colors cursor-pointer"
            onClick={() => handleIconClick('star')}
          />
          <SvgIcon 
            name="heart" 
            viewBox="0 0 24 24" 
            width="32" 
            height="32" 
            fill="currentColor"
            className="text-pink-500 hover:text-pink-600 transition-colors cursor-pointer"
            onClick={() => handleIconClick('heart')}
          />
          <SvgIcon 
            name="settings" 
            viewBox="0 0 24 24" 
            width="32" 
            height="32" 
            fill="currentColor"
            className="text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
            onClick={() => handleIconClick('settings')}
          />
        </div>
      </div>
    </div>
  );
};

export default SvgIconDemo;
