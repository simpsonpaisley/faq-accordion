document.addEventListener('DOMContentLoaded', () => {
	const disclosureButtons = document.querySelectorAll('.disclosure button');

	const setupPanel = (button, index) => {
		const content = button.nextElementSibling;
		const panelId = `panel-${index + 1}`;

		button.setAttribute('aria-expanded', 'false');
		button.setAttribute('aria-controls', panelId);
		button.setAttribute('id', `button-${index + 1}`);

		content.id = panelId;
		content.setAttribute('role', 'region');
		content.setAttribute('aria-labelledby', button.id);
		content.tabIndex = -1;

		content.style.display = 'none';
	};

	const togglePanel = (button, isOpen) => {
		const content = button.nextElementSibling;
		const icon = button.querySelector('.disclosureIcon');

		button.setAttribute('aria-expanded', isOpen);
		content.style.display = isOpen ? 'block' : 'none';
		content.tabIndex = isOpen ? 0 : -1;
		icon.src = `./assets/images/icon-${isOpen ? 'minus' : 'plus'}.svg`;
	};

	disclosureButtons.forEach(setupPanel);

	disclosureButtons.forEach((button) => {
		button.addEventListener('click', () => {
			const isExpanded = button.getAttribute('aria-expanded') === 'true';

			disclosureButtons.forEach((otherButton) => {
				if (otherButton !== button) togglePanel(otherButton, false);
			});

			togglePanel(button, !isExpanded);
		});
	});
});
