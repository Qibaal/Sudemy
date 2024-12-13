import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Sudemy Business</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-blue-600">Teach on Sudemy</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-blue-600">Get the app</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-blue-600">About us</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-blue-600">Contact us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Careers</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-blue-600">Careers</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-blue-600">Blog</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-blue-600">Help and Support</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-blue-600">Affiliate</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Terms</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-blue-600">Terms of Use</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-blue-600">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-blue-600">Cookie Settings</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-blue-600">Sitemap</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-blue-600">Facebook</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-blue-600">Twitter</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-blue-600">LinkedIn</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-blue-600">Instagram</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">&copy; 2023 Sudemy, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}