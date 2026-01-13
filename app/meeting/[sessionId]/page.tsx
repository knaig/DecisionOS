import { notFound, redirect } from 'next/navigation';
import { currentUser } from '@clerk/nextjs/server';
import VirtualMeetingRoom from '../../../components/ux-enhanced/VirtualMeetingRoom';
import MeetingRoomProvider from '../../../components/meeting/MeetingRoomProvider';

type PageProps = any;

export async function generateMetadata({ params }: PageProps) {
  const { sessionId } = await params;
  return {
    title: `Meeting Room - Session ${sessionId}`,
    description: 'BeBrahma Virtual Meeting Room with real-time AI agents',
    keywords: 'AI, meeting room, collaboration, real-time, agents'
  };
}

export default async function MeetingRoomPage({ params }: PageProps) {
  const { sessionId } = await params;
  
  if (!sessionId || sessionId.length < 3) {
    notFound();
  }
  
  const isAuthDisabled = process.env.NEXT_PUBLIC_DISABLE_AUTH === 'true';
  const user = isAuthDisabled ? null : await currentUser();
  if (!isAuthDisabled && !user) {
    redirect('/sign-in?redirect_url=' + encodeURIComponent(`/meeting/${sessionId}`));
  }
  
  return (
    <div className="min-h-screen">
      <MeetingRoomProvider sessionId={sessionId}>
        <VirtualMeetingRoom 
          sessionId={sessionId}
          currentStage={'collaboration'}
        />
      </MeetingRoomProvider>
    </div>
  );
}

export async function generateStaticParams() {
  return [];
}

export const dynamic = 'force-dynamic';
export const revalidate = 0;
