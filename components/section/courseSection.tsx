import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function CourseSection() {
  const courses = [
    {
      id: 1,
      title: 'Innovation, Business Models And Entrepreneurship',
      content:
        'The course offers a thorough insight into innovation, entrepreneurship, and business models, emphasizing practical strategies. ',
      link: 'https://onlinecourses.nptel.ac.in/noc23_mg116/preview',
      image: '/course/t1.jpg?height=300&width=400',
    },
    {
      id: 2,
      title: 'Product And Brand Management',
      content:
        'The course is essential for students and professionals, including leaders in various organizations, offering a comprehensive knowledge package by combining two key subjects.',
      link: 'https://onlinecourses.nptel.ac.in/noc23_mg110/preview',
      image: '/course/t2.jpg?height=300&width=400',
    },
    {
      id: 3,
      title: 'Integrated Marketing Communication',
      content:
        'The course teaches planning, executing, and evaluating marketing communication strategies, focusing on media integration, consumer behavior, and the strategic role of Integrated Marketing Communications (IMC).',
      link: 'https://onlinecourses.nptel.ac.in/noc23_mg32/preview',
      image: '/course/t3.jpg?height=300&width=400',
    },
    {
      id: 4,
      title: 'Innovation in Marketing and Marketing of Innovation',
      content:
        'This course integrates marketing and innovation, offering both conceptual and practical knowledge to help students, executives, and entrepreneurs understand and apply innovation in marketing and marketing of innovation.',
      link: 'https://onlinecourses.nptel.ac.in/noc24_mg25/preview',
      image: '/course/t4.jpg?height=300&width=400',
    },
    {
      id: 5,
      title: 'Strategic Management',
      content:
        'This course equips students with the skills to visualize, plan, and execute complex strategies to achieve organizational goals, understand industry changes, and develop new competencies, blending conceptual knowledge with practical applications.',
      link: 'https://onlinecourses.nptel.ac.in/noc24_mg112/preview',
      image: '/course/t5.jpg?height=300&width=400',
    },
  ];

  return (
    <section className="">
      <div className="">
        {/* <div>
          <h2 className="text-3xl font-bold tracking-tight">Courses Taught</h2>
          <p className="text-muted-foreground mt-2">
            Specialized courses in marketing, innovation, and strategic
            management
          </p>
        </div> */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="flex flex-col overflow-hidden rounded-lg shadow-md"
            >
              {/* Image Section */}
              <div className="relative w-full h-48 overflow-hidden mt-[-42px]">
                <Image
                  src={course.image}
                  alt={course.title}
                  layout="fill"
                  objectFit="contain"
                  className=""
                />
              </div>
              {/* Card Content */}
              <div className="flex flex-col p-4">
                <h3 className="mb-2 text-lg font-semibold line-clamp-2">
                  {course.title}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground line-clamp-3">
                  {course.content}
                </p>
                <Link
                  href={course.link}
                  passHref
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="default" size="sm">
                    Learn More
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
