import React from 'react';
import { SvgIcon } from '../atoms/svg-sprite-loader';

/**
 * SVG Sprite Usage Examples
 * 
 * This component demonstrates various ways to use the SVG sprite system
 * with different icons, sizes, and styling options.
 */

const SvgSpriteUsageExample: React.FC = () => {
  const handleIconClick = (iconName: string) => {
    console.log(`Clicked on ${iconName} icon`);
  };

  return (
    <div className="max-w-6xl mx-auto p-8 space-y-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          SVG Sprite System Examples
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive examples showing how to use the SVG sprite system with different
          icons, sizes, colors, and interactive features.
        </p>
      </header>

      {/* Basic Usage */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Basic Usage</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {['home', 'user', 'settings', 'search', 'menu', 'close'].map((iconName) => (
            <div key={iconName} className="flex flex-col items-center space-y-2">
              <SvgIcon 
                name={iconName} 
                viewBox="0 0 24 24" 
                width="32" 
                height="32" 
                fill="currentColor"
                className="text-blue-600"
              />
              <span className="text-sm text-gray-600 capitalize">{iconName}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Different Sizes */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Different Sizes</h2>
        <div className="flex items-center space-x-6">
          {[16, 24, 32, 48, 64].map((size) => (
            <div key={size} className="flex flex-col items-center space-y-2">
              <SvgIcon 
                name="star" 
                viewBox="0 0 24 24" 
                width={size} 
                height={size} 
                fill="currentColor"
                className="text-yellow-500"
              />
              <span className="text-sm text-gray-600">{size}px</span>
            </div>
          ))}
        </div>
      </section>

      {/* Color Variations */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Color Variations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            { color: 'text-red-500', name: 'Red' },
            { color: 'text-green-500', name: 'Green' },
            { color: 'text-blue-500', name: 'Blue' },
            { color: 'text-yellow-500', name: 'Yellow' },
            { color: 'text-purple-500', name: 'Purple' },
            { color: 'text-pink-500', name: 'Pink' },
          ].map(({ color, name }) => (
            <div key={name} className="flex flex-col items-center space-y-2">
              <SvgIcon 
                name="heart" 
                viewBox="0 0 24 24" 
                width="32" 
                height="32" 
                fill="currentColor"
                className={color}
              />
              <span className="text-sm text-gray-600">{name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Icons */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Interactive Icons</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            { name: 'plus', label: 'Add' },
            { name: 'edit', label: 'Edit' },
            { name: 'trash', label: 'Delete' },
            { name: 'save', label: 'Save' },
            { name: 'download', label: 'Download' },
            { name: 'share', label: 'Share' },
          ].map(({ name, label }) => (
            <div key={name} className="flex flex-col items-center space-y-2">
              <SvgIcon 
                name={name} 
                viewBox="0 0 24 24" 
                width="32" 
                height="32" 
                fill="currentColor"
                className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors"
                onClick={() => handleIconClick(name)}
              />
              <span className="text-sm text-gray-600">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Status Icons */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Status Icons</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            { name: 'check-circle', color: 'text-green-500', label: 'Success' },
            { name: 'x-circle', color: 'text-red-500', label: 'Error' },
            { name: 'alert-circle', color: 'text-yellow-500', label: 'Warning' },
            { name: 'info', color: 'text-blue-500', label: 'Info' },
            { name: 'loading', color: 'text-gray-500', label: 'Loading' },
            { name: 'warning', color: 'text-orange-500', label: 'Caution' },
          ].map(({ name, color, label }) => (
            <div key={name} className="flex flex-col items-center space-y-2">
              <SvgIcon 
                name={name} 
                viewBox="0 0 24 24" 
                width="32" 
                height="32" 
                fill="currentColor"
                className={color}
              />
              <span className="text-sm text-gray-600">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation Icons */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Navigation Icons</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            { name: 'arrow-left', label: 'Back' },
            { name: 'arrow-right', label: 'Forward' },
            { name: 'arrow-up', label: 'Up' },
            { name: 'arrow-down', label: 'Down' },
            { name: 'external-link', label: 'External' },
            { name: 'refresh', label: 'Refresh' },
          ].map(({ name, label }) => (
            <div key={name} className="flex flex-col items-center space-y-2">
              <SvgIcon 
                name={name} 
                viewBox="0 0 24 24" 
                width="32" 
                height="32" 
                fill="currentColor"
                className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors"
                onClick={() => handleIconClick(name)}
              />
              <span className="text-sm text-gray-600">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Styling Examples */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Custom Styling</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Glow Effect */}
          <div className="flex flex-col items-center space-y-2 p-4 bg-gray-50 rounded-lg">
            <SvgIcon 
              name="star-filled" 
              viewBox="0 0 24 24" 
              width="48" 
              height="48" 
              fill="currentColor"
              className="text-yellow-500"
              style={{ 
                filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.5))',
                animation: 'pulse 2s infinite'
              }}
            />
            <span className="text-sm text-gray-600">Glow Effect</span>
          </div>

          {/* Gradient Background */}
          <div className="flex flex-col items-center space-y-2 p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
            <SvgIcon 
              name="heart-filled" 
              viewBox="0 0 24 24" 
              width="48" 
              height="48" 
              fill="currentColor"
              className="text-white"
            />
            <span className="text-sm text-white">Gradient Background</span>
          </div>

          {/* Rotating Icon */}
          <div className="flex flex-col items-center space-y-2 p-4 bg-gray-50 rounded-lg">
            <SvgIcon 
              name="refresh" 
              viewBox="0 0 24 24" 
              width="48" 
              height="48" 
              fill="currentColor"
              className="text-blue-500"
              style={{ 
                animation: 'spin 1s linear infinite'
              }}
            />
            <span className="text-sm text-gray-600">Rotating Icon</span>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Code Examples</h2>
        <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
          <pre className="text-green-400 text-sm">
{`// Basic usage
<SvgIcon 
  name="home" 
  viewBox="0 0 24 24" 
  width="24" 
  height="24" 
  fill="currentColor"
/>

// With click handler
<SvgIcon 
  name="settings" 
  viewBox="0 0 24 24" 
  width="32" 
  height="32" 
  className="hover:text-blue-600 cursor-pointer"
  onClick={() => console.log('Settings clicked')}
/>

// Custom styling
<SvgIcon 
  name="star-filled" 
  viewBox="0 0 24 24" 
  width="48" 
  height="48" 
  className="text-yellow-500"
  style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
/>`}
          </pre>
        </div>
      </section>
    </div>
  );
};

export default SvgSpriteUsageExample;
