import React from 'react';
import { ArrowRight, PersonStanding, Battery, Smartphone } from 'lucide-react';
import Cricketbat from '../assets/images/cricketbat.jpg';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Reimagined cricket with</span>
                <span className="block text-blue-600"> mixed reality bat</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Play Your Favourite Sport at Home Living those unforgettable
                emotional experiences, bringing you closer to your beloved
                person and yourself
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-full shadow">
                  <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                    Pre-order now <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4 sm:gap-6">
                <div className="flex flex-col items-center lg:items-start">
                  <div className="flex items-center text-blue-600">
                    <PersonStanding className="h-6 w-6" />
                    <span className="ml-2 font-bold text-2xl">99%</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">Accuracy</p>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <div className="flex items-center text-blue-600">
                    <Battery className="h-6 w-6" />
                    <span className="ml-2 font-bold text-2xl">30d</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">Battery Life</p>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <div className="flex items-center text-blue-600">
                    <Smartphone className="h-6 w-6" />
                    <span className="ml-2 font-bold text-2xl">iOS/Android</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">App Support</p>
                </div>
              </div>
            </div>
          </main>

          {/* Hero Image */}
          <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 mt-8 lg:mt-0">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={Cricketbat}
              alt="Smart Bat in use"
            />            
          </div>
        </div>
      </div>
    </div>
  );
}
