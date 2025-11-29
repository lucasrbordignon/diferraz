import React from 'react';

export type ViewState = 'home' | 'portfolio' | 'location';

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

export interface PortfolioItem {
  id: number;
  url: string;
  title: string;
}