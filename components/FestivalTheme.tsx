'use client';

import { useFestivalTheme } from '@/lib/useFestivalTheme';
import { FestivalType } from '@/lib/festivalConfig';
import dynamic from 'next/dynamic';

// Dynamically import theme components for code splitting
const SankrantiTheme = dynamic(() => import('./FestivalThemes/SankrantiTheme'));
const UgadiTheme = dynamic(() => import('./FestivalThemes/UgadiTheme'));
const DasaraTheme = dynamic(() => import('./FestivalThemes/DasaraTheme'));
const DeepavaliTheme = dynamic(() => import('./FestivalThemes/DeepavaliTheme'));
const VinayakaChavithiTheme = dynamic(() => import('./FestivalThemes/VinayakaChavithiTheme'));
const ShivaratriTheme = dynamic(() => import('./FestivalThemes/ShivaratriTheme'));
const RamaNavamiTheme = dynamic(() => import('./FestivalThemes/RamaNavami Theme'));
const VaikuntaEkadasiTheme = dynamic(() => import('./FestivalThemes/VaikuntaEkadasiTheme'));
const BonuluTheme = dynamic(() => import('./FestivalThemes/BonuluTheme'));
const BathukammaTheme = dynamic(() => import('./FestivalThemes/BathukammaTheme'));
const NewYearTheme = dynamic(() => import('./FestivalThemes/NewYearTheme'));
const ChristmasTheme = dynamic(() => import('./FestivalThemes/ChristmasTheme'));
const EidTheme = dynamic(() => import('./FestivalThemes/EidTheme'));
const MuharramTheme = dynamic(() => import('./FestivalThemes/MuharramTheme'));
const IndependenceDayTheme = dynamic(() => import('./FestivalThemes/IndependenceDayTheme'));
const RepublicDayTheme = dynamic(() => import('./FestivalThemes/RepublicDayTheme'));
const WomensDayTheme = dynamic(() => import('./FestivalThemes/WomensDayTheme'));

interface FestivalThemeProps {
  /** Optional override for testing purposes */
  overrideFestival?: FestivalType;
}

/**
 * Main festival theme wrapper component
 * Renders the appropriate theme based on current date and session state
 * Automatically handles performance checks and accessibility
 */
export default function FestivalTheme({ overrideFestival }: FestivalThemeProps) {
  const { activeFestival, hasPlayed, isEnabled } = useFestivalTheme(overrideFestival);

  // Don't render if disabled or already played
  if (!isEnabled || hasPlayed || !activeFestival) {
    return null;
  }

  // Render the appropriate theme component
  return <ThemeRenderer festivalId={activeFestival.id} />;
}

function ThemeRenderer({ festivalId }: { festivalId: FestivalType }) {
  switch (festivalId) {
    case 'sankranti':
      return <SankrantiTheme />;
    case 'ugadi':
      return <UgadiTheme />;
    case 'dasara':
      return <DasaraTheme />;
    case 'deepavali':
      return <DeepavaliTheme />;
    case 'vinayaka-chavithi':
      return <VinayakaChavithiTheme />;
    case 'shivaratri':
      return <ShivaratriTheme />;
    case 'rama-navami':
      return <RamaNavamiTheme />;
    case 'vaikunta-ekadasi':
      return <VaikuntaEkadasiTheme />;
    case 'bonalu':
      return <BonuluTheme />;
    case 'bathukamma':
      return <BathukammaTheme />;
    case 'new-year':
      return <NewYearTheme />;
    case 'christmas':
      return <ChristmasTheme />;
    case 'eid-ul-fitr':
    case 'eid-ul-adha':
      return <EidTheme />;
    case 'muharram':
      return <MuharramTheme />;
    case 'independence-day':
      return <IndependenceDayTheme />;
    case 'republic-day':
      return <RepublicDayTheme />;
    case 'womens-day':
      return <WomensDayTheme />;
    default:
      return null;
  }
}
