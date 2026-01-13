import { Metadata } from 'next';
import PlaybookRunner from '@/components/founder-os/PlaybookRunner';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

type Props = any;

export const metadata: Metadata = {
  title: 'Run Playbook - Founder OS',
  description: 'Execute your playbook step by step',
};

export default async function RunPlaybookPage({ params }: Props) {
  const { id } = await params;
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/founder-os/playbooks">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Playbooks
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Playbook Runner */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <PlaybookRunner playbookId={id} />
      </div>
    </div>
  );
}
