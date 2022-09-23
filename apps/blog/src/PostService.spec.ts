import path from 'path';
import { jest } from 'testing';
import PostService from './PostService';

describe('PostsApi', () => {
  const fakePostsDirectory = 'dir/posts/';
  const fakePostFiles: Record<string, string> = {
    'post-one.md': '# heading',
    'post-two.md': '## heading',
    'post-three.md': '# heading',
  };

  const fakeMatter = {
    data: {
      title: 'Test',
      date: new Date().toISOString(),
    },
    content: '',
  } as const;
  let postsApi: PostService;

  const mockFs = {
    readdirSync: jest.fn((_input) => Object.keys(fakePostFiles) as any),
    readFileSync: jest.fn((_input) => '# heading'),
  };
  const mockMatter = jest.fn((_input) => fakeMatter);

  beforeEach(() => {
    mockFs.readdirSync.mockClear();
    mockFs.readFileSync.mockClear();
    mockMatter.mockClear();
    postsApi = new PostService({
      directory: fakePostsDirectory,
      fs: mockFs,
      parse: mockMatter,
      path,
    });
  });

  describe('postsApi.getSlugs()', () => {
    it('should get list of file names in postsDirectory', () => {
      expect(postsApi.getSlugs()).toStrictEqual(Object.keys(fakePostFiles));
      expect(mockFs.readdirSync).toHaveBeenCalledTimes(1);
    });
  });

  describe('postsApi.getBySlug()', () => {
    it('should get post data from slug with or without extension', () => {
      const slugs = ['post-one', 'post-one.md'];
      mockFs.readFileSync.mockReturnValue('# heading');
      mockMatter.mockReturnValue(fakeMatter);
      const [postA, postB] = slugs.map((slug) =>
        postsApi.getBySlug(slug, ['content'])
      );
      expect(postA).toBeTruthy();
      expect(postA).toStrictEqual(postB);
    });
    it('should only get specified fields', () => {
      const post = postsApi.getBySlug('post-one', ['title', 'date']);
      expect(Object.keys(post)).toStrictEqual(['title', 'date']);
    });
    it('should use matter function to parse frontmatter', () => {
      postsApi.getBySlug('post-one', ['title', 'date']);
      expect(mockMatter).toHaveBeenCalledWith(fakePostFiles['post-one.md']);
    });
  });
});
