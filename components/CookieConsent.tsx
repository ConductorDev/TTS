"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true as these are essential
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    // Check if user has already set cookie preferences
    const savedPreferences = localStorage.getItem('cookiePreferences');
    if (!savedPreferences) {
      setShowConsent(true);
    } else {
      setPreferences(JSON.parse(savedPreferences));
    }
  }, []);

  const savePreferences = (accepted: boolean = false) => {
    const finalPreferences = accepted 
      ? { necessary: true, analytics: true, marketing: true, functional: true }
      : { ...preferences, necessary: true };
    
    localStorage.setItem('cookiePreferences', JSON.stringify(finalPreferences));
    setPreferences(finalPreferences);
    setShowConsent(false);
    setShowPreferences(false);

    // Here you would typically call functions to enable/disable various tracking services
    if (finalPreferences.analytics) {
      // Enable analytics (e.g., Google Analytics)
    }
    if (finalPreferences.marketing) {
      // Enable marketing cookies
    }
    if (finalPreferences.functional) {
      // Enable functional cookies
    }
  };

  if (!showConsent && !showPreferences) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end justify-center z-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-t-lg max-w-2xl w-full text-black dark:text-white">
        {!showPreferences ? (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Cookie Settings</h2>
            <p className="text-sm">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
              By clicking "Accept All", you consent to our use of cookies. You can manage your preferences by clicking "Preferences".
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => savePreferences(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Accept All
              </button>
              <button
                onClick={() => setShowPreferences(true)}
                className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Preferences
              </button>
              <button
                onClick={() => savePreferences(false)}
                className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Reject All
              </button>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              <Link href="/cookie-policy" className="underline hover:text-gray-700 dark:hover:text-gray-300">
                Cookie Policy
              </Link>
              {' | '}
              <Link href="/privacy-policy" className="underline hover:text-gray-700 dark:hover:text-gray-300">
                Privacy Policy
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Cookie Preferences</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="font-medium">Necessary Cookies</label>
                  <input
                    type="checkbox"
                    checked={preferences.necessary}
                    disabled
                    className="h-4 w-4"
                  />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Essential for the website to function properly. Cannot be disabled.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="font-medium">Analytics Cookies</label>
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                    className="h-4 w-4"
                  />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Help us understand how visitors interact with our website.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="font-medium">Marketing Cookies</label>
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                    className="h-4 w-4"
                  />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Used to deliver personalized advertisements.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="font-medium">Functional Cookies</label>
                  <input
                    type="checkbox"
                    checked={preferences.functional}
                    onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })}
                    className="h-4 w-4"
                  />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Enable advanced features and personalization.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => savePreferences(false)}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Save Preferences
              </button>
              <button
                onClick={() => setShowPreferences(false)}
                className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Back
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
