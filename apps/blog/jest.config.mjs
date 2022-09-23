import nextJest from 'next/jest';
import { jestConfig } from 'testing';

const createJestConfig = nextJest({ dir: './' });

export default createJestConfig(jestConfig);
