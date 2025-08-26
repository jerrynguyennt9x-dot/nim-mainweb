export type Project = {
  name: string
  description: string
  link: string
  //video: string
  image: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Highpoly 3D Sculpt',
    description: 'Các sản phẩm luyện tập cá nhân',
    link: '#',
    image: '/images/project1.jpg',
    id: 'project1',
  },
  {
    name: 'Page Facebook',
    description: 'Tham khảo các khóa học tại đây',
    link: '#',
    image: '/images/project15.jpg',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
    {
    company: 'Sama Academy Of Media Arts',
    title: '3D Artist',
    start: '2024',
    end: 'Present',
    link: '#',
    id: 'work1',
  },
  {
    company: 'Oneunivercity Studio',
    title: '3D Artist',
    start: '2022',
    end: '2024',
    link: '#',
    id: 'work2',
  },
  {
    company: 'Zstudio',
    title: '3D Model',
    start: '2019',
    end: '2022',
    link: '#',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Chúng ta thường ví tuổi trẻ với điều gì?',
    description: 'Người ta thường ví tuổi trẻ với những hình ảnh',
    link: '#',
    uid: 'blog-1',
  },
  {
    title: 'Tuổi trẻ chỉ đến một lần - hãy sống rực rỡ',
    description:
      'Đừng để nó trôi qua trong sự an toàn - cái  bẫy của tuổi trẻ',
    link: '#',
    uid: 'blog-2',
  },
  {
    title: '3D Artist những kẻ mộng mơ',
    description:
      '3D Artist không chỉ là bản tình ca của đơn sắc',
    link: '#',
    uid: 'blog-3',
  },
  {
    title: 'Điều hối tiếc của chính bản thân đôi khi...',
    description: 'Đã có lúc bản thân tôi đã từng hỏi rằng liệu mình có điều gì hối tiếc không? Bạn thì sao...',
    link: '#',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Facebook',
    link: 'https://www.facebook.com/your-profile',
  },
  {
    label: 'ArtStation',
    link: 'https://www.artstation.com/your-profile',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/your-profile',
  },
]

export const EMAIL = 'nguyenthanhtam9xstudy@gmail.com'
