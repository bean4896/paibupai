"use strict";
exports.id = 936;
exports.ids = [936];
exports.modules = {

/***/ 1936:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "fetchAllPosts": () => (/* binding */ fetchAllPosts),
  "fetchFeaturedPosts": () => (/* binding */ fetchFeaturedPosts),
  "fetchPostBySlug": () => (/* binding */ fetchPostBySlug),
  "fetchPostsPage": () => (/* binding */ fetchPostsPage),
  "getAllPostSlugs": () => (/* binding */ getAllPostSlugs)
});

;// CONCATENATED MODULE: ./lib/blog-config.ts
// Blog configuration for GitHub markdown integration
const blogConfig = {
    // GitHub repository settings
    github: {
        owner: "your-username",
        repo: "paibupai-blog",
        branch: "main",
        path: "posts"
    },
    // Blog settings
    blog: {
        title: "Paibupai Photography Blog",
        description: "Professional photography insights, tips, and stories from Singapore",
        postsPerPage: 6,
        featuredPostsCount: 3
    },
    // API settings
    api: {
        cacheTime: 60 * 60 * 1000,
        revalidate: 3600
    }
};
// GitHub API endpoints
const githubApi = {
    baseUrl: "https://api.github.com",
    rawBaseUrl: "https://raw.githubusercontent.com",
    // Get repository contents
    getContents: (owner, repo, path, branch = "main")=>`${githubApi.baseUrl}/repos/${owner}/${repo}/contents/${path}?ref=${branch}`,
    // Get raw file content
    getRawFile: (owner, repo, path, branch = "main")=>`${githubApi.rawBaseUrl}/${owner}/${repo}/${branch}/${path}`
};

// EXTERNAL MODULE: ./lib/markdown.ts
var markdown = __webpack_require__(3203);
;// CONCATENATED MODULE: ./lib/github-api.ts


// Fetch all blog posts from GitHub
async function fetchAllPosts() {
    try {
        const { owner , repo , path , branch  } = blogConfig.github;
        const url = githubApi.getContents(owner, repo, path, branch);
        const response = await fetch(url, {
            headers: {
                "Accept": "application/vnd.github.v3+json",
                "User-Agent": "Paibupai-Blog"
            },
            next: {
                revalidate: blogConfig.api.revalidate
            }
        });
        if (!response.ok) {
            // Return empty array if repository not found or not configured yet
            if (response.status === 404) {
                console.warn("Blog repository not found or not configured yet. Please update lib/blog-config.ts");
                return [];
            }
            throw new Error(`GitHub API error: ${response.status}`);
        }
        const files = await response.json();
        // Filter for markdown files
        const markdownFiles = files.filter((file)=>file.type === "file" && file.name.endsWith(".md"));
        // Process each markdown file
        const posts = await Promise.all(markdownFiles.map(async (file)=>{
            try {
                const content = await fetchMarkdownContent(file.download_url);
                const { data , content: markdownContent  } = await (0,markdown/* processMarkdown */.Yt)(content);
                return (0,markdown/* validateBlogPost */.Oe)(data, markdownContent);
            } catch (error) {
                console.error(`Error processing ${file.name}:`, error);
                return null;
            }
        }));
        // Filter out failed posts and sort by date
        return posts.filter((post)=>post !== null).sort((a, b)=>new Date(b.date).getTime() - new Date(a.date).getTime());
    } catch (error) {
        console.error("Error fetching blog posts:", error);
        return [];
    }
}
// Fetch a specific blog post by slug
async function fetchPostBySlug(slug) {
    try {
        const { owner , repo , path , branch  } = blogConfig.github;
        const url = githubApi.getContents(owner, repo, path, branch);
        const response = await fetch(url, {
            headers: {
                "Accept": "application/vnd.github.v3+json",
                "User-Agent": "Paibupai-Blog"
            },
            next: {
                revalidate: blogConfig.api.revalidate
            }
        });
        if (!response.ok) {
            // Return null if repository not found or not configured yet
            if (response.status === 404) {
                console.warn("Blog repository not found or not configured yet. Please update lib/blog-config.ts");
                return null;
            }
            throw new Error(`GitHub API error: ${response.status}`);
        }
        const files = await response.json();
        // Find the markdown file with matching slug
        const targetFile = files.find((file)=>file.type === "file" && file.name.endsWith(".md") && (file.name === `${slug}.md` || file.name.startsWith(`${slug}-`)));
        if (!targetFile) {
            return null;
        }
        const content = await fetchMarkdownContent(targetFile.download_url);
        const { data , content: markdownContent  } = await (0,markdown/* processMarkdown */.Yt)(content);
        return (0,markdown/* validateBlogPost */.Oe)(data, markdownContent);
    } catch (error) {
        console.error(`Error fetching post ${slug}:`, error);
        return null;
    }
}
// Fetch featured posts
async function fetchFeaturedPosts() {
    const allPosts = await fetchAllPosts();
    return allPosts.filter((post)=>post.featured).slice(0, blogConfig.blog.featuredPostsCount);
}
// Fetch posts for pagination
async function fetchPostsPage(page = 1) {
    const allPosts = await fetchAllPosts();
    const { postsPerPage  } = blogConfig.blog;
    const startIndex = (page - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const posts = allPosts.slice(startIndex, endIndex);
    const totalPages = Math.ceil(allPosts.length / postsPerPage);
    return {
        posts,
        totalPages,
        currentPage: page
    };
}
// Fetch raw markdown content from GitHub
async function fetchMarkdownContent(downloadUrl) {
    const response = await fetch(downloadUrl, {
        next: {
            revalidate: blogConfig.api.revalidate
        }
    });
    if (!response.ok) {
        throw new Error(`Failed to fetch markdown content: ${response.status}`);
    }
    return response.text();
}
// Get all post slugs for static generation
async function getAllPostSlugs() {
    const posts = await fetchAllPosts();
    return posts.map((post)=>post.slug);
}


/***/ }),

/***/ 3203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Oe": () => (/* binding */ validateBlogPost),
/* harmony export */   "Yt": () => (/* binding */ processMarkdown),
/* harmony export */   "p6": () => (/* binding */ formatDate)
/* harmony export */ });
/* unused harmony exports calculateReadingTime, generateExcerpt, generateSlug */
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5872);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(574);
/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3717);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5380);




// Process markdown content
async function processMarkdown(content) {
    // Parse frontmatter
    const { data , content: markdownContent  } = gray_matter__WEBPACK_IMPORTED_MODULE_0___default()(content);
    // Convert markdown to HTML
    const processedContent = await (0,remark__WEBPACK_IMPORTED_MODULE_1__/* .remark */ .j)().use(remark_gfm__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z) // GitHub Flavored Markdown
    .use(remark_html__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        sanitize: false
    }).process(markdownContent);
    return {
        data,
        content: markdownContent,
        html: processedContent.toString()
    };
}
// Calculate reading time
function calculateReadingTime(content) {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
}
// Generate excerpt from content
function generateExcerpt(content, maxLength = 160) {
    const plainText = content.replace(/[#*`_~]/g, "") // Remove markdown formatting
    .replace(/\n+/g, " ") // Replace newlines with spaces
    .trim();
    if (plainText.length <= maxLength) {
        return plainText;
    }
    return plainText.substring(0, maxLength).replace(/\s+\S*$/, "") + "...";
}
// Validate blog post data
function validateBlogPost(data, content) {
    const slug = data.slug || generateSlug(data.title);
    const excerpt = data.excerpt || generateExcerpt(content);
    const readTime = calculateReadingTime(content);
    return {
        slug,
        title: data.title || "Untitled",
        excerpt,
        content,
        date: data.date || new Date().toISOString(),
        author: data.author || "Paibupai Team",
        tags: Array.isArray(data.tags) ? data.tags : [],
        featured: Boolean(data.featured),
        coverImage: data.coverImage || data.image,
        readTime
    };
}
// Generate slug from title
function generateSlug(title) {
    return title.toLowerCase().replace(/[^a-z0-9 -]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single
    .trim();
}
// Format date for display
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-SG", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}


/***/ })

};
;