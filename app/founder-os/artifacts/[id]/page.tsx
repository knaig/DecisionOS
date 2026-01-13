import { Metadata } from 'next';
import ArtifactViewer from '@/components/founder-os/ArtifactViewer';

export const metadata: Metadata = {
  title: 'View Artifact - Founder OS',
  description: 'View artifact details',
};

export default async function ArtifactPage({ params }: any) {
  const { id } = await params;
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <ArtifactViewer artifactId={id} />
      </div>
    </div>
  );
}
