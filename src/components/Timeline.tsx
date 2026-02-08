'use client';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline';
import { getMessage, type Locale } from '@/lib/i18n';

type TimelineEntry = { date: string; title: string; location: string; description: string; icon: 'work' | 'academic' };

const iconMap = { work: BriefcaseIcon, academic: AcademicCapIcon };

interface TimelineProps {
  locale: Locale;
  timelineTitle?: string;
}

const Timeline = ({ locale, timelineTitle = 'Professional Journey' }: TimelineProps) => {
  const entries = (getMessage(locale, 'timeline.entries') as TimelineEntry[]) ?? [];

  return (
    <div className="py-20">
      <h2 className="text-4xl font-bold text-center mb-16">{timelineTitle}</h2>
      <VerticalTimeline>
        {entries.map((item, index) => {
          const IconComponent = iconMap[item.icon];
          return (
            <VerticalTimelineElement
              key={index}
              date={item.date}
              dateClassName="text-gray-300"
              contentStyle={{ background: 'rgb(17, 24, 39)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid rgb(17, 24, 39)' }}
              iconStyle={{ background: 'rgb(17, 24, 39)', color: '#fff' }}
              icon={<IconComponent className="w-5 h-5" />}
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <h4 className="text-gray-400">{item.location}</h4>
              <p className="text-gray-300 mt-2">{item.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline; 