import { Metadata } from 'next';
import ArtifactEditor from '@/components/founder-os/ArtifactEditor';

export const metadata: Metadata = {
  title: 'Edit Artifact - Founder OS',
  description: 'Edit artifact details',
};

export default async function EditArtifactPage({ params, searchParams }: any) {
  const { id } = await params;
  const { workspace } = await searchParams;
  const workspaceSlug = workspace || 'default';

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <ArtifactEditor artifactId={id} workspaceSlug={workspaceSlug} />
      </div>
    </div>
  );
}
