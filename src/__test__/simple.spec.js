it('should increment count value', () => {
    const {getByText} = render(<App />)
    const count = getByText(/count is/)
  
    fireEvent.click(count)
  
    expect(count).toHaveTextContent(1)
    expect(count.textContent).toContain('1')
  })