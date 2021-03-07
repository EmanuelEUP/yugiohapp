function useRestar(value_offset,value_showing) {

    let result = value_offset - value_showing;
  
    return { result };
  }

  export default useRestar;