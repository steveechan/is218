export const CoreValueCard = ({title, description}) => {
    return      <li className="space-y-4">
                  <h4 className=" text-sage-accent2 text-xl">{title}</h4>
                  <p className="leading-loose">
                    {description}
                  </p>
                </li>
}
