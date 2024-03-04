export const pageVars = {
    initial : {
      scaleY:0
    },
    animate : {
      scaleY: 1,
      transition: {
        duration: 0.6,
        ease: [0.12, 0, 0.39, 0],
        delay: 0.1
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration:0.5,
        ease: [0.22, 0, 0.39,0],
      },
    },
  }

export const aboutAnim={
    initial: {
      y: 140,
      transition:{
        duration:0.5,
        opacity: 1
      }, 
    },
    show: {
      y: 0,
      transition: {
        duration:1.2,
        opacity: 0,
        delay: 0.6

      }
    }
  }

export const containerVars ={
    initial: {
      transition: {
        staggerChildren: { 
          duration: 0.9,
          ease: [0.37, 0, 0.63, 1]
          }
      },
    },
    open: {
      transition: {
        staggerChildren: { 
        duration: 0.9,
        ease: [0.37, 0, 0.63, 1]
        }
      }
    }
  }

export const translate = {
    initial: {
        y: "100%",
        opacity: 0
    },
    enter: (i: any) => ({
        y: 0,
        opacity: 1,
        transition: {duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: i[0]}
    }),
    exit: (i: any) => ({
        y: "100%",
        opacity: 0,
        transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: i[1]}
    })
};

export const imageVar = {
    initial : {
        scaleY:0
      },
      animate : {
        scaleY: 1,
        transition: {
          duration: 0.6,
          ease: [0.12, 0, 0.39, 0],
          delay: 0.8
        },
      },
}
