"use client";
import { useState } from 'react';

export default function ExtensionsPage() {
  const [extensions, setExtensions] = useState<string[]>([]);

  const fetchExtensions = async () => {
    console.log('Fetching extensions...');
    try {
      const response = await fetch('http://localhost:3000/extensions');
      const data = await response.json();
      console.log('Fetched extensions:', data.extensions);
      setExtensions(data.extensions);
    } catch (error) {
      console.error('拡張機能の取得に失敗しました:', error);
    }
  };

  const insertExtensions = async () => {
    console.log('Inserting extensions:', extensions);
    try {
      extensions.forEach(async (extension) => {
        const res = await fetch('http://localhost:3001/extensions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ extension }),
        });
        console.log('Inserted extension:', extension);
      });
    } catch (error) {
      console.error('拡張機能データの送信に失敗しました:', error);
    }
  };

  fetchExtensions();
  insertExtensions();

  console.log('ExtensionsPage component rendered');
}