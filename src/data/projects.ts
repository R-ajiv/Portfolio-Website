import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Social Network Platform',
    date: 'Nov 2024',
    description: 'A full-featured social networking platform with personalized user profiles, real-time chat, and content sharing capabilities.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    features: [
      'User authentication and profile customization',
      'Real-time messaging system',
      'News feed with content filtering',
      'Friend connections and networking features',
      'Media sharing capabilities'
    ],
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    liveLink: 'https://socialnetworkbyrajiv.netlify.app/'
  },
  {
    id: 2,
    title: 'EatStreet - Food Delivery Website',
    date: 'July 2024',
    description: 'A comprehensive food delivery application with restaurant listings, menu browsing, order tracking, and secure payment processing.',
    technologies: ['MERN Stack', 'Redux', 'Bootstrap', 'Node.js'],
    features: [
      'Restaurant discovery and menu browsing',
      'Shopping cart functionality',
      'Secure payment processing',
      'Order tracking system',
      'Admin dashboard for restaurant owners'
    ],
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    liveLink: 'https://github.com/R-ajiv/Food_Delivery_Website'
  },
  {
    id: 3,
    title: 'Inksphere - Blog Website',
    date: 'July 2024',
    description: 'A modern blogging platform with secure user authentication, content management, and interactive commenting system.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    features: [
      'User authentication and authorization',
      'Rich text editor for content creation',
      'Comment and interaction system',
      'Category and tag management',
      'Content recommendation engine'
    ],
    image: 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg',
    liveLink: 'https://inksphere.netlify.app/'
  }
];