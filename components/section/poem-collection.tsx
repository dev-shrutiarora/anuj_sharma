import { cn } from '@/lib/utils';

interface Poem {
  id: string;
  title: string;
  author: string;
  content: string;
}

interface PoemCollectionProps {
  poems: Poem[];
  className?: string;
}

export default function PoemCollection({
  poems = [
    {
      id: 'poem1',
      title: 'The Road Not Taken',
      author: 'Robert Frost',
      content:
        'Two roads diverged in a yellow wood,\nAnd sorry I could not travel both\nAnd be one traveler, long I stood\nAnd looked down one as far as I could\nTo where it bent in the undergrowth;\n\nThen took the other, as just as fair,\nAnd having perhaps the better claim,\nBecause it was grassy and wanted wear;\nThough as for that the passing there\nHad worn them really about the same.',
    },
  ],
  className,
}: PoemCollectionProps) {
  return (
    <section className={cn('w-full py-12 md:py-24', className)}>
      <div className=" px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            My Poetry Collection
          </h1>

          <div className="space-y-16">
            {poems.map((poem) => {
              // Split the content by newlines to create stanzas
              const stanzas = poem.content.split('\n\n');

              return (
                <div
                  key={poem.id}
                  className="rounded-lg border bg-card p-6 shadow-sm"
                >
                  <div className="space-y-8">
                    <div className="space-y-2 text-center">
                      <h2 className="text-2xl font-serif italic tracking-tight sm:text-3xl">
                        {poem.title}
                      </h2>
                      {/* <p className="text-muted-foreground">by {poem.author}</p> */}
                    </div>

                    <div className="space-y-6 font-serif text-lg leading-relaxed">
                      {stanzas.map((stanza, index) => (
                        <div key={index} className="space-y-2">
                          {stanza.split('\n').map((line, lineIndex) => (
                            <p
                              key={lineIndex}
                              className="mx-auto max-w-2xl text-center"
                            >
                              {line || '\u00A0'}
                            </p>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
