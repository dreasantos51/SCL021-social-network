export const posts = () => {
    const divPosts = document.createElement('div');

    const viewPosts = `
        <h1>Este será el muro con los posts</h1>
      `;
    divPosts.innerHTML = viewPosts;

    return divPosts;
};