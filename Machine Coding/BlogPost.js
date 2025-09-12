/*
    Blog Post
    - platform stores list of blog posts
    - PostCard component (each with title, body, tags, views, reactions)
    - imports data from 'postsData.js'
*/

const BlogPost = () => {
  return (
    <div className='main-container'>
      <h2>Blog Posts </h2>
      <div className='post-grid'>
        {postsData.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

function PostCard({ title, body, tags, reactions, views }) {
  return (
    <div className='card'>
      <h4>{title}</h4>
      <p>{body}</p>
      <div className='tags'>
        {tags.map((tag, index) => (
          <span key='index' className='tag'>
            #{tag}
          </span>
        ))}
      </div>
      <div className='meta'>
        <p>
          {reactions.likes} | {reactions.dislikes} | {views} views
        </p>
      </div>
    </div>
  );
}

const postsData = [
  {
    id: 1,
    title: 'His mother had always taught him',
    body: 'His mother had always taught him not to ever think of himself as better than others...',
    tags: ['history', 'american', 'crime'],
    reactions: { likes: 192, dislikes: 25 },
    views: 305,
    userId: 121,
  },
  {
    id: 2,
    title: 'He was an expert but not in a discipline',
    body: 'He was an expert but not in a discipline that anyone could fully appreciate...',
    tags: ['french', 'fiction', 'english'],
    reactions: { likes: 859, dislikes: 32 },
    views: 4884,
    userId: 91,
  },
  {
    id: 3,
    title: 'Dave watched as the forest burned up on the hill.',
    body: "Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen.",
    tags: ['magical', 'history', 'french'],
    reactions: {
      likes: 1448,
      dislikes: 39,
    },
    views: 4152,
    userId: 16,
  },
  {
    id: 4,
    title: 'All he wanted was a candy bar.',
    body: "All he wanted was a candy bar. It didn't seem like a difficult request to comprehend, but the clerk remained frozen and didn't seem to want to honor the request. It might have had something to do with the gun pointed at his face.",
    tags: ['mystery', 'english', 'american'],
    reactions: {
      likes: 359,
      dislikes: 18,
    },
    views: 4548,
    userId: 47,
  },
];

const blogPostsRoot = ReactDOM.createRoot(
  document.getElementById('blog-posts'),
);
blogPostsRoot.render(<BlogPost />);
