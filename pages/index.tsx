import React from 'react';
import type { NextPage } from 'next';

import NoSSR from '../components/NoSSR';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <NoSSR>
      <Layout>
        <div className="py-24 sm:py-32 lg:py-40">
          <div className="mx-auto max-w-7xl px-2 lg:px-4">
            {/* TODO: Hero Section UI */}

            {/* TODO: Use Calculator Component Here */}

            <div className="mt-20 py-4 text-center">
              <p className="text-gray-400">Powered by</p>
              <a
                href="https://linktr.ee/codeofrelevancy?utm_source=weather-app&utm_medium=cpc&utm_campaign=promotion"
                className="text-indigo-500 font-medium"
                target="_blank"
                rel="noreferrer"
              >
                Code of Relevancy
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </NoSSR>
  );
};

export default Home;
