import nextJest from 'next/jest';
import { jestConfig } from '@zmrl/portfolio-testing';

const createJestConfig = nextJest({ dir: './' });

export default createJestConfig(jestConfig);
