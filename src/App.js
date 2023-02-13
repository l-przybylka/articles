import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Switch } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import Articles from './components/Articles';
import Container from '@mui/material/Container'

const financialArticles = [
  {
    id: 0,
    headerImage: 'https://picsum.photos/200/300',
    header: 'Understanding the Stock Market',
    intro: 'The stock market can be a confusing and intimidating concept, especially for those new to investing. However, understanding the basics is crucial for making informed investment decisions and potentially growing your wealth.',
    article: 'The stock market is essentially a collection of exchanges where stocks (pieces of ownership in a company) are bought and sold. Companies issue stocks in order to raise capital for growth and expansion, and when individuals buy these stocks, they become partial owners of the company. The value of a stock is determined by factors such as the financial health of the company, market trends, and the overall economy. When stocks perform well, the stock market performs well, and vice versa. It is important to remember that investing in the stock market carries risk, and while it can lead to significant financial gains, there is also the possibility of losses. That being said, a well-researched and diversified investment portfolio can help mitigate risk and increase the likelihood of successful returns. Overall, taking the time to understand the stock market can pay off in the long run and help individuals achieve their financial goals.'
  },
  {
    id: 1,
    headerImage: 'https://picsum.photos/200/300',
    header: 'Managing Debt',
    intro: "Debt is a common part of many people's financial lives, but it can quickly spiral out of control if not properly managed. From credit card debt to student loans, understanding and taking steps to manage debt is crucial for achieving financial stability.",
    article: "The first step to managing debt is to understand the type of debt you have and the interest rates associated with it. High-interest debt, such as credit card debt, should be a priority to pay off as quickly as possible. On the other hand, low-interest debt, such as student loans, may not need to be paid off as quickly. Creating a budget can also help manage debt by ensuring that you are not overspending and accumulating more debt. Additionally, consider ways to increase your income, such as taking on a side job or selling unused items, in order to pay off debt more quickly. It is also a good idea to avoid taking on new debt as much as possible. If debt becomes overwhelming, there are resources available, such as credit counseling or debt consolidation, that can help individuals get back on track. Managing debt takes time and effort, but with determination and a solid plan, it is possible to achieve financial stability and peace of mind."
  },
  {
    id: 2,
    headerImage: 'https://picsum.photos/200/300',
    header: 'Investing in Real Estate',
    intro: 'Real estate can be a lucrative investment option for those looking to diversify their portfolios and potentially generate passive income. From rental properties to real estate investment trusts (REITs), there are various ways to invest in real estate.',
    article: 'When it comes to investing in real estate, there are many factors to consider. For example, rental properties can provide a steady stream of rental income, but also come with responsibilities such as maintenance and finding tenants. On the other hand, REITs allow individuals to invest in a diverse portfolio of properties without the hassle of direct property management. It is important to research and understand the different options available, as well as the potential risks and rewards associated with each. Factors such as location, market conditions, and the overall economy can also play a role in the success of a real estate investment. As with any investment, it is crucial to have a well-researched and diversified investment strategy to maximize returns and mitigate risk. With the right approach, investing in real estate can be a lucrative and rewarding endeavor.'
  },
  {
    id: 3,
    headerImage: 'https://picsum.photos/200/300',
    header: 'Saving for a Down Payment on a House',
    intro: 'Saving for a down payment on a house can seem like a daunting task, but with the right strategy, it can be achieved. From cutting expenses to increasing income, there are many ways to build a solid savings plan for a down payment on a house.',
    article: 'Creating a budget and finding areas to cut expenses can be a good starting point for building a savings plan for a down payment on a house. Consider reducing discretionary spending, such as eating out and entertainment, and prioritize saving over spending. Increasing your income through a side job or freelance work can also help boost your savings. Setting clear financial goals and tracking your progress can help keep you motivated and on track towards your goal. In addition, consider researching and taking advantage of first-time homebuyer programs and grants that can help with the cost of a down payment. While saving for a down payment on a house can be challenging, it is a worthwhile and achievable goal with the right mindset and strategy.'
  },
  {
    id: 4,
    headerImage: 'https://picsum.photos/200/300',
    header: 'Retirement Planning',
    intro: 'Retirement planning is an important aspect of personal finance and a crucial step towards securing your financial future. From traditional pensions to individual retirement accounts (IRAs), there are various options available for retirement savings.',
    article: 'When it comes to retirement planning, the earlier you start, the better. This gives your savings more time to grow and compound over the years. Consider setting aside a portion of your income each month and contributing to a retirement account, such as a 401(k) or IRA. It is also important to regularly reassess your savings plan and make adjustments as needed, such as increasing contributions or changing investments. In addition, it may be beneficial to seek the advice of a financial advisor who can help you create a personalized retirement plan and ensure that you are on track towards your goals. While retirement may seem far off, planning and saving for it now can provide peace of mind and financial stability in the future.'
  },
  {
    id: 5,
    headerImage: 'https://picsum.photos/200/300',
    header: 'Managing Debt',
    intro: 'Debt can quickly become overwhelming and can have a negative impact on your finances. However, with the right approach, debt can be managed and eventually paid off.',
    article: 'The first step in managing debt is to understand your current financial situation and create a budget. This can help you prioritize expenses and allocate funds towards paying off debt. Consider consolidating high-interest debt, such as credit card debt, into a lower-interest loan to potentially save money on interest payments. Making extra payments towards debt can also help pay it off faster. In addition, be mindful of new debt and avoid taking on more debt if possible. While managing debt can be a challenging process, developing a debt repayment plan and sticking to it can help lead to a debt-free future and improved financial stability.'
  }
]


function App() {
  const [theme, settheme] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: theme ? 'dark' : 'light',
    },
  });

  const handleChange = (event) => {
    settheme(event.target.checked);
  }
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <h1>Financial News</h1>
          <label>Dark Mode</label>
          <Switch
            checked={theme}
            color='success'
            onChange={handleChange} />
          <Articles articles={financialArticles} />
        </Container>
      </ThemeProvider>

    </div>
  );
}

export default App;
