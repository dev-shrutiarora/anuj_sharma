import React from 'react';

export default function TeachingSection() {
  return (
    <section id="teaching" className="py-12 scroll-mt-20">
      <div className="space-y-4"></div>
      <div className="mt-8 space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-4"></h3>

          {/* <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Product and Brand Management</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/hero.jpg?height=150&width=300"
                  alt="Course Thumbnail"
                  width={300}
                  height={150}
                  className="rounded-md mb-4 w-full object-cover"
                />
                <p className="text-sm text-muted-foreground mb-4">
                  Comprehensive course covering product lifecycle and brand
                  strategy development.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  View Course
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Strategic Management</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/hero.jpg?height=150&width=300"
                  alt="Course Thumbnail"
                  width={300}
                  height={150}
                  className="rounded-md mb-4 w-full object-cover"
                />
                <p className="text-sm text-muted-foreground mb-4">
                  Advanced course on strategic planning and competitive
                  advantage in global markets.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  View Course
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Rural Marketing</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/hero.jpg?height=150&width=300"
                  alt="Course Thumbnail"
                  width={300}
                  height={150}
                  className="rounded-md mb-4 w-full object-cover"
                />
                <p className="text-sm text-muted-foreground mb-4">
                  Specialized course on marketing strategies for rural markets
                  and emerging economies.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  View Course
                </Button>
              </CardContent>
            </Card>
          </div> */}
        </div>
        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6"></div>
        </div>
      </div>
    </section>
  );
}
