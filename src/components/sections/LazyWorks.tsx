import dynamic from 'next/dynamic';

const WorksSection = dynamic(() => import('./WorksServer'));

export default WorksSection;