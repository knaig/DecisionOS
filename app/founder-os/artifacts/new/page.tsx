import { Metadata } from 'next';
import ArtifactEditor from '@/components/founder-os/ArtifactEditor';

export const metadata: Metadata = {
  title: 'Create Artifact - Founder OS',
  description: 'Create a new artifact',
};

export default async function NewArtifactPage({ searchParams }: any) {
  const { workspace } = await searchParams;
  const workspaceSlug = workspace || 'default';

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <ArtifactEditor workspaceSlug={workspaceSlug} />
      </div>
    </div>
  );
}
