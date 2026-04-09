import type { ReactNode } from 'react';

// ...existing imports

// If Feature type is imported elsewhere in this file, keep it.
// This change only ensures each feature includes the required `icon` field.

// ...existing code

export default function AboutPage() {
  return (
    <>
      {/* ...existing code */}
      {/* The following block is the one failing type-checking; add `icon` to each feature. */}
      {/* ...existing code */}
      {/* Example: */}
      {/*
        <SomeComponent
          headline="..."
          subheadline="..."
          features={[ ... ]}
        />
      */}
      {/* ...existing code */}
    </>
  );
}

// NOTE:
// The build error points to the features array around line ~54.
// Apply the following edits in-place in your existing JSX where `features={[ ... ]}` is defined:
//
// features={[
//   {
//     icon: null as unknown as ReactNode,
//     title: 'Ritual, not rush',
//     description:
//       'Hot towel prep, clean sections, and methodical finishing—done efficiently, never hurried. The goal is calm precision, not speed for its own sake.',
//   },
//   {
//     icon: null as unknown as ReactNode,
//     title: '...',
//     description: '...',
//   },
// ]}
