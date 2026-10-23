
import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Palette, ExternalLink, AlertCircle } from 'lucide-react';

/**
 * Artwork Interface
 * Represents one artwork entry from /public/art/index.json
 */
type Artwork = {
  title: string;
  url: string;
  artist?: string;
  year?: string;   // when the artwork was made
  added?: string;  // when I came across it; used to group the page
  image?: string;
  thought?: string;
};

const UNDATED = 'Other favourites';

/**
 * Groups artworks by the year they were added, newest first.
 * Entries without an `added` year go in a final group.
 */
function groupByAdded(artworks: Artwork[]): [string, Artwork[]][] {
  const groups = new Map<string, Artwork[]>();
  for (const art of artworks) {
    const key = art.added || UNDATED;
    groups.set(key, [...(groups.get(key) ?? []), art]);
  }
  return [...groups.entries()].sort(([a], [b]) => {
    if (a === UNDATED) return 1;
    if (b === UNDATED) return -1;
    return b.localeCompare(a);
  });
}

/**
 * ArtworkCard Component
 * Shows the image (if any), title, artist and an optional short thought.
 * The whole card links to the artwork's page.
 */
const ArtworkCard = ({ art }: { art: Artwork }) => {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <a href={art.url} target="_blank" rel="noopener noreferrer" className="group block">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        {art.image && !imageFailed && (
          <div className="aspect-[4/3] overflow-hidden bg-muted">
            <img
              src={art.image}
              alt={`${art.title}${art.artist ? ` by ${art.artist}` : ''}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              onError={() => setImageFailed(true)}
            />
          </div>
        )}
        <CardContent className="pt-4 space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
              {art.title}
            </h3>
            <ExternalLink className="h-4 w-4 mt-1 text-muted-foreground flex-shrink-0" />
          </div>
          {(art.artist || art.year) && (
            <p className="text-sm text-muted-foreground">
              {[art.artist, art.year].filter(Boolean).join(', ')}
            </p>
          )}
          {art.thought && (
            <p className="text-sm text-foreground/80 italic leading-relaxed">
              {art.thought}
            </p>
          )}
        </CardContent>
      </Card>
    </a>
  );
};

/**
 * ArtPage Component
 *
 * A collection of artworks I've liked over the years, each linking to
 * the artwork with an optional short thought about it.
 *
 * Data: /public/art/index.json (an array of Artwork entries)
 */
const ArtPage = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadArtworks = async () => {
      try {
        const response = await fetch('/art/index.json');
        if (!response.ok) throw new Error('Failed to load artworks');
        setArtworks(await response.json());
      } catch (err) {
        setError('Failed to load artworks');
      } finally {
        setLoading(false);
      }
    };

    loadArtworks();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 pb-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center min-h-96">
              <div className="text-center">
                <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-muted-foreground">Loading artworks...</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Art I Love
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pieces that have stayed with me over the years, and sometimes a few words on why.
            </p>
          </div>

          {/* Error State */}
          {error && (
            <div className="max-w-2xl mx-auto mb-8">
              <Card className="border-destructive">
                <CardContent className="flex items-center space-x-2 pt-6">
                  <AlertCircle className="h-5 w-5 text-destructive" />
                  <span className="text-destructive">{error}</span>
                </CardContent>
              </Card>
            </div>
          )}

          {artworks.length > 0 ? (
            <div className="space-y-12">
              {groupByAdded(artworks).map(([group, items]) => (
                <section key={group}>
                  <h2 className="text-2xl font-bold mb-4 pb-2 border-b">{group}</h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((art) => (
                      <ArtworkCard key={art.url} art={art} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          ) : (
            !error && (
              /* Empty State */
              <div className="text-center py-12">
                <Palette className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No artworks yet</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Artworks will appear here.
                </p>
              </div>
            )
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArtPage;
