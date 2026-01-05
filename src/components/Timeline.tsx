'use client';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

const timelineData = [
  {
    date: '2025',
    title: 'Head of Data and Cloud',
    location: 'NOW GmbH',
    description: 'Leading the data strategy and team, AWS infrastructure, and driving data-driven initiatives across the organization.',
    icon: BriefcaseIcon,
  },
  {
    date: '2024',
    title: 'Data Engineer',
    location: 'NOW GmbH',
    description: 'Development and maintenance of various ETL pipelines in AWS. Administration of AWS infrastructure. Successful initiatives of AWS Certification Sprint 1, internal hackathon, women mentorship program.',
    icon: BriefcaseIcon,
  },
  {
    date: '2023',
    title: 'Consultant AI & Data Analytics',
    location: 'Deloitte',
    description: 'Comprehensive analysis of bank transaction data, NLP and ML solutions for several user cases.',
    icon: BriefcaseIcon,
  },
  {
    date: '2022',
    title: 'Digital Analyst',
    location: 'Digital Motion GmbH',
    description: 'Automatic data pipeline in AWS for reporting and dashboards, Google analytics 4 migration, Web tracking concepts.',
    icon: BriefcaseIcon,
  },
  {
    date: '2020',
    title: 'Research Associate',
    location: 'Julius Kühn-Institut',
    description: '"HortiSem" Project for the semantic web',
    icon: BriefcaseIcon,
  },
  {
    date: '2018-2020',
    title: 'M.S. in Project Management and Data Science',
    location: 'HTW Berlin',
    description: 'Advanced studies in project management methodologies and data science applications.',
    icon: AcademicCapIcon,
  },
  {
    date: '2015',
    title: 'Business Developer',
    location: 'Joining Start GmbH',
    description: 'Business development and strategic initiatives.',
    icon: BriefcaseIcon,
  },
  {
    date: '2010-2012',
    title: 'M.S. in Automotive Engineering',
    location: 'Politecnico di Torino, Italy',
    description: 'Specialized in automotive engineering and advanced vehicle systems.',
    icon: AcademicCapIcon,
  },
  {
    date: '2011',
    title: 'Erasmus Exchange Semester',
    location: 'INSA Lyon, France',
    description: 'Exchange semester in mechanical engineering department at Institut National des Sciences Appliquées de LYON.',
    icon: AcademicCapIcon,
  },
  {
    date: '2007-2010',
    title: 'B.S. in Automotive Engineering',
    location: 'Politecnico di Torino, Italy',
    description: 'Foundation in automotive engineering principles and technologies.',
    icon: AcademicCapIcon,
  },
  {
    date: '2006',
    title: 'B.S. in Mechanical Engineering',
    location: 'Southeast University, China',
    description: 'Core mechanical engineering education and fundamentals.',
    icon: AcademicCapIcon,
  },
];

const Timeline = () => {
  return (
    <div className="py-20">
      <h2 className="text-4xl font-bold text-center mb-16">Professional Journey</h2>
      <VerticalTimeline>
        {timelineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            date={item.date}
            dateClassName="text-gray-300"
            contentStyle={{ background: 'rgb(17, 24, 39)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid rgb(17, 24, 39)' }}
            iconStyle={{ background: 'rgb(17, 24, 39)', color: '#fff' }}
            icon={<item.icon className="w-5 h-5" />}
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <h4 className="text-gray-400">{item.location}</h4>
            <p className="text-gray-300 mt-2">{item.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline; 