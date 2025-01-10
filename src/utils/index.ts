const Utils = {
  MobileTerminal: (v: number = 430) => {
    const fn = () => {
      const targetW = document.documentElement.clientWidth
      if (targetW <= v) {
        document.getElementsByTagName('html')[0].style.fontSize =
          targetW / 100 + 'px'
        document.body.classList.add('mobile')
      } else {
        document.getElementsByTagName('html')[0].style.fontSize = `${v / 100}px`
        document.body.classList.remove('mobile')
      }
    }
    fn()
    window.addEventListener('resize', fn)
  },
  tokenFn: {
    setToken: (tk: any, eid = 7) => {
      const date = new Date();
      date.setDate(date.getDate() + eid);
      const expires = date.toUTCString();
      document.cookie = `faigo-token=${encodeURIComponent(tk)};expires=${expires};path=/`;
      document.cookie = `faigo-token-expiry=${encodeURIComponent(date.getTime())};expires=${expires};path=/`;
    },
    getToken: () => {
      const cookies = document.cookie.split('; ');
      for (let cookie of cookies) {
        const [name, value] = cookie.split('=');
        if (name === 'faigo-token') {
          return decodeURIComponent(value);
        }
      }
      return null; // 如果未找到 Token，返回 null
    },
    tokenIsExpired: () => {
      const cookies = document.cookie.split('; ');
      for (let cookie of cookies) {
        const [name, value] = cookie.split('=');
        if (name === 'faigo-token-expiry') {
          const expiryTime = decodeURIComponent(value);
          const now = new Date().getTime();
          return +now > +expiryTime; // 检查当前时间是否大于 token 的过期时间
        }
      }
      return true; // 如果没有找到过期时间，认为 token 已过期
    },
    deleteToken: () => {
      document.cookie = `faigo-token=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
      document.cookie = `faigo-token-expiry=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
    }
  }
  
}

export default Utils
